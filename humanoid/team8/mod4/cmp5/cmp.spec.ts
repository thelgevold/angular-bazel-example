
import { Cmp7845Component } from './cmp';
describe('Cmp7845Component', () => {
  it('should add', () => {
    expect(new Cmp7845Component().add7845(1)).toBe(7846);
  });
});