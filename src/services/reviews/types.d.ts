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
  approved?: boolean | null;
  content?: string;
  image_url?: string | null;
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