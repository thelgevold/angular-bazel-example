
import { Cmp5292Component } from './cmp';
describe('Cmp5292Component', () => {
  it('should add', () => {
    expect(new Cmp5292Component().add5292(1)).toBe(5293);
  });
});