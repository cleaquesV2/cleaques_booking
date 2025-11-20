export interface Ticket {
    id: number;
    event_id: string;
    name: string;
    description: string;
    price: string;
    quantity: number;
    status: string;
    created_at?: string;
    updated_at?: string;
    soldticket: number;
    type?: string;
    slots?: {
        start_time: string;
        end_time: string;
    }[];
    streaming_times?: {
        id?: number;
        start_time: string;
        end_time: string;
    }[];
}

export interface Performer {
    id: number;
    event_id: string;
    name: string;
    image: string;
    bio: string;
}

export interface Event {
    id: string;
    slug: string;
    title: string;
    description: string;
    type: string;
    replay: boolean;
    timezone: string;
    address: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    user_local_start_time: string;
    user_local_end_time: string;
    image: string;
    islive: boolean;
    preview_link?: string;
    duration: number;
    status: string;
    user_id?: number;
    created_at: string;
    updated_at?: string;
    tickets: Ticket[];
    performers: Performer[];
    isUpdating?: boolean;
    promotion_exits?: boolean;
    currency: string;
}

export interface EventResponse {
    status: boolean;
    message: string;
    data: Event[];
    meta: {
        current_page: number;
        last_page: number;
        total: number;
        per_page: number;
    };
}