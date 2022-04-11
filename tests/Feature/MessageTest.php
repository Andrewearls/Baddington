<?php

namespace Tests\Feature;

use App\Models\Message;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Mail\Events\MessageSent;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class MessageTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Messages response successful.
     *
     * @return void
     */
    public function test_message_sent()
    {
        Event::fake();

        $message = Message::factory()->make();

        $response = $this->post(route('messages.store'), [
            'name'    => $message->name,
            'email'   => $message->email,
            'subject' => $message->subject,
            'message' => $message->message,
        ]);

        // response successful
        $response->assertStatus(200);

        // message is in database
        $this->assertDatabaseHas('messages', [
            'name'    => $message->name,
            'email'   => $message->email,
            'subject' => $message->subject,
            'message' => $message->message,
        ]);

        // mailing event fired
        Event::assertDispatched(MessageSent::class);

    }

}
