
import { Cmp3127Component } from './cmp';
describe('Cmp3127Component', () => {
  it('should add', () => {
    expect(new Cmp3127Component().add3127(1)).toBe(3128);
  });
});