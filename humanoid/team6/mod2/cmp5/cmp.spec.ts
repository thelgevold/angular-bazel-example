
import { Cmp7625Component } from './cmp';
describe('Cmp7625Component', () => {
  it('should add', () => {
    expect(new Cmp7625Component().add7625(1)).toBe(7626);
  });
});