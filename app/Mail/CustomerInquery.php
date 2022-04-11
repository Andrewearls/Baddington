<?php

namespace App\Mail;

use App\Models\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CustomerInquery extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $outgoing;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Message $message)
    {
        $this->outgoing = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->outgoing->email, $this->outgoing->name)
            ->subject($this->outgoing->subject)
            ->view('emails.customer.inquery');
    }
}
