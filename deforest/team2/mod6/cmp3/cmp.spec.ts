
import { Cmp3263Component } from './cmp';
describe('Cmp3263Component', () => {
  it('should add', () => {
    expect(new Cmp3263Component().add3263(1)).toBe(3264);
  });
});