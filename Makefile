TESTS = test/*.js
REPORTER = dot

test:
	@./node_modules/.bin/mocha \
		--require should \
		--require $(shell pwd)/test/common \
		--reporter $(REPORTER) \
		--growl \
		$(TESTS)

.PHONY: test