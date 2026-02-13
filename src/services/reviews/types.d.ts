type GetReviewsResponse = {
	success: boolean;
	data: Review[];
	meta: null;
};

type GetLastReviewsResponse = GetReviewsResponse;

type approbeReviewPayload = {
	review_id: string;
}

type approbeReviewResponse = {
	success: boolean;
	data: Pick<Review, "id" | "status">;
	meta: null;
}

type hideReviewPayload = approbeReviewPayload

type hideReviewResponse = approbeReviewResponse