
import { Cmp3011Component } from './cmp';
describe('Cmp3011Component', () => {
  it('should add', () => {
    expect(new Cmp3011Component().add3011(1)).toBe(3012);
  });
});