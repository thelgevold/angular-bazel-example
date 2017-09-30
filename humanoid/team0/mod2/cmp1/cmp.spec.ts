
import { Cmp7021Component } from './cmp';
describe('Cmp7021Component', () => {
  it('should add', () => {
    expect(new Cmp7021Component().add7021(1)).toBe(7022);
  });
});