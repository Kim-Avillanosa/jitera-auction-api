"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionBid = void 0;
const auction_entity_1 = require("./auction.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let AuctionBid = class AuctionBid {
};
exports.AuctionBid = AuctionBid;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AuctionBid.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AuctionBid.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], AuctionBid.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], AuctionBid.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AuctionBid.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AuctionBid.prototype, "auctionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => auction_entity_1.Auction, (auction) => auction.bids),
    (0, typeorm_1.JoinColumn)({ name: 'auctionId' }),
    __metadata("design:type", auction_entity_1.Auction)
], AuctionBid.prototype, "auction", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.bids),
    __metadata("design:type", user_entity_1.User)
], AuctionBid.prototype, "user", void 0);
exports.AuctionBid = AuctionBid = __decorate([
    (0, typeorm_1.Entity)()
], AuctionBid);
//# sourceMappingURL=auctionbid.entity.js.map