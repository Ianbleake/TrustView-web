type GetReviewsResponse = {
	success: boolean;
	data: Review[];
	meta: null;
};

type GetLastReviewsResponse = GetReviewsResponse;

type approbeReviewPayload = {
	review_id: string;
};

type approbeReviewResponse = {
	success: boolean;
	data: Pick<Review, "id" | "status">;
	meta: null;
};

type hideReviewPayload = approbeReviewPayload;

type hideReviewResponse = approbeReviewResponse;

type NewReviewPayload = {
  store_id: string | undefined;
  product_id: string;
  product_name?: string | null;
  author_name: string;
  rating: number;
  content?: string;
  image_url?: string | null;
  approved?: boolean | null;
	tienda_nube_user_id: string;
	product_url: string;
};

type NewReviewResponse = {
	success: boolean;
	data: Review;
	meta: null;
};

type RemoveReviewResponse = {
	success: boolean;
	data: Pick<Review, "id">;
	meta: null;
}

type ImportPayload = {
	file: File;
	store_id: string;
}

type ImportError = {
	row: number;
	error: string;
}

type ImportResponse = {
	success: boolean;
	data: {
		total: number,
		inserted: {
			count: number,
			reviews: Review[],
		},
		failed: {
			count: number,
			reviews: Review[],
		},
		errors: ImportError[],
	};
	meta: null;
}