
import { Cmp3400Component } from './cmp';
describe('Cmp3400Component', () => {
  it('should add', () => {
    expect(new Cmp3400Component().add3400(1)).toBe(3401);
  });
});