
import { Cmp4625Component } from './cmp';
describe('Cmp4625Component', () => {
  it('should add', () => {
    expect(new Cmp4625Component().add4625(1)).toBe(4626);
  });
});