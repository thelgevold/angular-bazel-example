
import { Cmp7122Component } from './cmp';
describe('Cmp7122Component', () => {
  it('should add', () => {
    expect(new Cmp7122Component().add7122(1)).toBe(7123);
  });
});