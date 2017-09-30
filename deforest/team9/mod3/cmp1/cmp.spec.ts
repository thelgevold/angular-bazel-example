
import { Cmp3931Component } from './cmp';
describe('Cmp3931Component', () => {
  it('should add', () => {
    expect(new Cmp3931Component().add3931(1)).toBe(3932);
  });
});