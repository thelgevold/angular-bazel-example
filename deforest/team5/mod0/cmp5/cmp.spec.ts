
import { Cmp3505Component } from './cmp';
describe('Cmp3505Component', () => {
  it('should add', () => {
    expect(new Cmp3505Component().add3505(1)).toBe(3506);
  });
});