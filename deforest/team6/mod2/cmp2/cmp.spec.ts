
import { Cmp3622Component } from './cmp';
describe('Cmp3622Component', () => {
  it('should add', () => {
    expect(new Cmp3622Component().add3622(1)).toBe(3623);
  });
});