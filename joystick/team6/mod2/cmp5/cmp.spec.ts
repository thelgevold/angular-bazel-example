
import { Cmp9625Component } from './cmp';
describe('Cmp9625Component', () => {
  it('should add', () => {
    expect(new Cmp9625Component().add9625(1)).toBe(9626);
  });
});