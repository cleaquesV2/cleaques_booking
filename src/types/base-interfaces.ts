// Generic API response (matches actual structure)
export type IResponse<T = unknown> = {
  status: boolean;
  message: string;
  data: T;
};

export type PaginationMeta = {
  current_page: number;
  last_page: number;
  total: number;
  per_page: number;
};

// Optional: use when API also returns paginated data
export type PaginatedResponse<T> = {
  items: T[];
  page: number;
  pages: number;
  size: number;
  total: number;
  logo_image?: string;
};

export type RegisterPersonalAccount = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
  referral_code?: string;
};

export type RegisterCreatorAccount = {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zip_code: string;
  password: string;
  password_confirmation: string;
};

// Response type specific to the register endpoint
export type RegisterResponse = {
  email: string;
  next: string;
  verified: boolean;
};

export type OTPVerification = {
  email: string;
  verification_code: string;
};

export type OTPVerificationResponse = {
  email: string;
  token: string;
  verified: boolean;
  role: string;
  firstname: string;
  lastname: string;
};

export type ResendVerification = {
  email: string;
}

export type ResendVerificationResponse = {
  email: string;
  code: string;
};

export type Login = {
  email: string;
  password: string;
}

export type LoginResponse = {
  verified: true,
  token: string,
  role: string,
  firstname: string,
  lastname: string,
  email: string,
  image: string
}

export type ForgotPassword = {
  email: string
}

export type ForgotPasswordResponse = {
  email: string;
  next: string;
}

export type ResetPassword = {
  email: string;
  verification_code: string;
  password: string;
  password_confirmation: string;
}

export type ResetPasswordResponse = {
  email: string;
  next: string;
  verified: boolean;
}

export type CheckTokenResponse = null;

export type SSOInitializePayload = {
  provider: string;
  redirect_url: string;
  // type: string;
}

export type SSOInitializeResponse = {
  url: string;
  state: string;
}

export type SSOCallbackPayload = {
  state: string;
}

export type SSOCallbackResponse = {
  token: string;
  verified: boolean;
  firstname: string;
  lastname: string;
  email: string;  
  image: string;
  role: string;
}

export type UserProfile = {
  id: string;
  firstname: string;
  lastname: string;
  avatar: string;
  image: string;
  phone_number: string | null;
  email: string;
  address: string | null;
}

export type UpdateUserProfile = {
  firstname: string;
  lastname: string;
  phone_number: string;
  email: string;
  // address: string;
  // image: string;
}

export type UpdateUserProfileResponse = {
  id: string;
  firstname: string;
  lastname: string;
  phone_number: string;
}

export type UpdateUserProfileImage = {
  image: string;
};

export type UpdateUserProfileImageResponse = {
  id: string;
  image: string;
};

export type ChangeUserPassword = {
  current_password: string;
  password: string;
  password_confirmation: string;
}

export type ChangeUserPasswordResponse = null;

export type EventData = {
  events: [
    {
      id: string;
      title: string;
      type: string;
      description: string;
      replay: boolean;
      address: string;
      timezone: string;
      start_date: string;
      end_date: string;
      start_time: string;
      end_time: string;
      image: string;
      islive: boolean;
      preview_link: string;
      duration: 0;
      created_at: string;
        creator: {
        id: number;
        phone_number: string;
        address: string;
        country: string;
        city: string;
        zip_code: string;
        state: string;
        image: string;
        created_at: number;
        updated_at: number;
        user_id: string | number;
        firstname: string;
        lastname: string
      };
      tickets: [
        {
          id: number;
          description: string;
          price: string;
          quantity: number
        }
      ];
      performers: [
        {
          id: string;
          name: string;
          image: string;
        }
      ]
    }
  ]
  upcoming_events: [
    {
      id: string;
      title: string;
      type: string;
      description: string;
      replay: boolean;
      address: string;
      timezone: string;
      start_date: string;
      end_date: string;
      start_time: string;
      end_time: string;
      image: string;
      islive: boolean;
      preview_link: string;
      duration: 0;
      created_at: string;
        creator: {
        id: number;
        phone_number: string;
        address: string;
        country: string;
        city: string;
        zip_code: string;
        state: string;
        image: string;
        created_at: number;
        updated_at: number;
        user_id: 0;
        firstname: string;
        lastname: string
      };
      tickets: [
        {
          id: number;
          description: string;
          price: string;
          quantity: number
        }
      ];
      performers: [
        {
          id: string;
          name: string;
          image: string;
        }
      ]
    }
  ]
  join_live_events: [
    {
      id: string;
      title: string;
      type: string;
      description: string;
      replay: true;
      address: string;
      timezone: string;
      start_date: string;
      end_date: string;
      start_time: string;
      end_time: string;
      image: string;
      islive: boolean
      preview_link: string;
      duration: number;
      created_at: string;
      creator: {
        id: number;
        phone_number: string;
        address: string;
        country: string;
        city: string;
        zip_code: string;
        state: string;
        image: string;
        created_at: string;
        updated_at: string;
        user_id: 0;
        firstname: string;
        lastname: string;
      }
      tickets: [
        {
          id: number;
          description: string;
          price: string;
          quantity: number
        }
      ];
      performers: [
        {
          id: string;
          name: string;
          image: string
        }
      ]
    }
  ]
  replays: [
    {
      id: 0;
      title: string;
      type: string;
      description: string;
      replay: boolean;
      address: string;
      timezone: string;
      start_date: string;
      end_date: string;
      start_time: string;
      end_time: string;
      image: string;
      islive: boolean;
      preview_link: string;
      duration: 0;
      created_at: string;
      creator: {
        id: number;
        phone_number: string;
        address: string;
        country: string;
        city: string;
        zip_code: string;
        state: string;
        image: string;
        created_at: string;
        updated_at: string;
        user_id: number;
        firstname: string;
        lastname: string
      },
      tickets: [
        {
          id: 0,
          description: string,
          price: string,
          quantity: number
        }
      ],
      performers: [
        {
          id: string,
          name: string,
          image: string
        }
      ]
    }
  ]
}

export type EventDetails = {
  event: {
    id: string;
    slug: string;
    title: string;
    type: string;
    description: string;
    replay: boolean;
    address: string;
    timezone: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    user_local_start_time: string
    user_local_end_time: string;
    image: string;
    islive: boolean;
    preview_link: string;
    duration: number;
    created_at: string;
    purchasedticket: boolean;
    currency: string;
    streaming_times: [];
    creator: {
      id: 0;
      phone_number: string;
      address: string;
      country: string;
      city: string;
      zip_code: string;
      state: string;
      image: string;
      created_at: string;
      updated_at: string;
      user_id: number;
      firstname: string;
      lastname: string
    };
    tickets: [
      {
        id: number;
        name: string;
        description: string;
        price: string;
        quantity: number;
        type: string
      }
    ];
    performers: [
      {
        id: number;
        name: string;
        image: string
      }
    ]
  };
  similar_event: {
    id: string;
    slug: string;
    title: string;
    type: string;
    description: string;
    replay: boolean;
    address: string;
    timezone: string;
    start_date: string;
    end_date: string;
    user_local_start_time: string;
    user_local_end_time: string;
    start_time: string;
    end_time: string;
    image: string;
    islive: boolean;
    preview_link: string;
    duration: number;
    created_at: string;
    currency: string;
    creator: {
      id: number;
      phone_number: string;
      address: string;
      country: string;
      city: string;
      zip_code: string;
      state: string;
      image: string;
      created_at: string;
      updated_at: string;
      user_id: number;
      firstname: string;
      lastname: string;
    };
    tickets: {
      id: number;
      description: string;
      price: string;
      quantity: number;
    }[];
    performers: {
      id: string;
      name: string;
      image: string;
    }[];
    purchasedticket: boolean;
  }[];
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  replay: boolean;
  address: string | null;
  timezone: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  image: string;
  islive?: boolean;
  preview_link: string;
  duration: number;
  created_at: string;
  status: string;
  user_local_end_time: string;
  user_local_start_time: string;
  purchasedticket: boolean;
}

export interface GetEventsParams {
  section: string;
  pages: number;
  search?: string;
}

export type SearchEventsResponse = {
  upcoming_events: Event[];
  join_live_events: Event[];
  replays: Event[];
};

export type Ticket = {
  id: number;
  title: string;
  type: 'in_person' | 'online' | 'both';
  description: string;
  replay: boolean;
  address: string;
  timezone: string;
  start_date: string; 
  end_date: string;   
  start_time: string; 
  end_time: string;  
  user_local_end_time: string;
  user_local_start_time: string;
  image: string;   
  preview_link: string;
  duration: number;
  created_at: string;
  status: 'active' | 'inactive' | string;
  purchasedticket: boolean;
  islive?: boolean;
};

export type TicketResponse = {
  tickets:  Ticket[];
};

export interface GetTicketsParams {
  // section: string;
  page: number;
  search?: string;
  email?: string;
}

export type TicketDetails = {
  id: number;
  title: string;
  type: string;
  description: string;
  image: string;
  address: string;
  islive: string;
  currency: string;
  user_local_start_time: string;
  user_local_end_time: string;
  ticket: {
    id: number;
    ticketname: string;
    amount: string;
    type: string;
    qrcode: string;
    created_at: string;
  }[];
};

export type CheckTicketAvailability = {
  ticket_id: number;
  event_id: string;
  quantity: string | number;
};

export type CheckTicketAvailabilityResponse = null;

export type EventAnalytics = {
  id: string | number;
  name: string;
  image: string;
  link: string;
  status: "Upcoming" | "Ongoing" | "Past";
  date?: string;
  views?: number;
  tickets_sold?: number;
  revenue?: number;
  replays?: number;
  sales_conversion?: number;
};

export type FlutterwavePaymentKeys = {
  P_key: string;
  E_key: string;
  keytype: string;
}

export type InitializeFlutterwaveTicketPayment = {
  currency: string; // Must be <= 3 characters
  event_id: string;
  failure_url: string; // Should be a URI
  success_url: string; // Should be a URI
  redirect_url: string; // Should be a URI
  ticket_id: number[]; // Must have at least 1 item
  quantity: number[]; // Must have at least 1 item
  amount: number[]; // Must have at least 1 item
};

export type InitializeFlutterwaveTicketPaymentResponse = {
  url: {
    payment_link: string;
    tx_ref: string;
  };
  reference: string;
  event_id: string;
}

export type VerifyFlutterwaveTicketPaymentResponse = {
  event_id: string;
  guest_user: string;
  newuser: boolean;
};
export type CancelFlutterwaveTicketPaymentResponse = null;

export interface EventSlide {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  image: string;
}

export type ContactSupport = {
  name: string;
  email: string;
  message: string;
}

export type ContactSupportResponse = null;

export type NewsletterSubscription = {
  email: string;
  name: string | null;
}

export type NewsletterSubscriptionResponse = null;

export type StreamTokenPayload = {
  uid: string;
}

export type StreamTokenResponse = {
  getstream_token: string;
  user_id: string;
  user_name: string;
  user_role: string;
  event_id: string;
  channel_id: string;
  call_type: string;
  channel_name: string;
  role: string;
  stream_type: string;
  video_settings: {
    enabled: boolean;
    camera_default_on: boolean;
    camera_facing: string;
    target_resolution: {
      width: number;
      height: number;
      bitrate: number;
    }
  }
}

export interface CreatorMovie {
  id: string;
  slug: string;
  poster: string;
  trailer: string;
  movie_file: string;
  title: string;
  description: string;
  category: string[];
  tags: string[];
  duration: number;
  rating: string;
  enabled_comments: boolean;
  allow_ratings: boolean;
  show_viewer_count: boolean;
  created_at: string;
  release_year?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comments?: any[];
}

export interface CreatorMovieResponse {
  status: boolean;
  message: string;
  data: CreatorMovie[];
  meta: {
      current_page: number;
      last_page: number;
      total: number;
      per_page: number;
  };
}


export interface Movie {
  id: string | number;
  slug: string;
  title: string;
  category: string[];
  description: string;
  tags: string | string[];
  rating: string;
  enable_comments: boolean;
  allow_ratings: boolean;
  movie_file: string;
  poster: string;
  trailer: string;
  preview_link: string;
  created_at: string;
  status: string;
}

export interface MovieDetails {
  id: string | number;
  slug: string;
  title: string;
  category: string[];
  description: string;
  tags: string | string[];
  rating: string;
  enable_comments: boolean;
  allow_ratings: boolean;
  movie_file: string;
  poster: string;
  trailer: string;
  preview_link: string;
  created_at: string;
  status: string;
  duration: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comments: any[];
}

export type SearchMoviesResponse = {
  movies: Movie[];
};

export interface GetMoviesParams {
  section: string;
  pages: number;
  search?: string;
}