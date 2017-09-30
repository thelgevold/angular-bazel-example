
import { Cmp3300Component } from './cmp';
describe('Cmp3300Component', () => {
  it('should add', () => {
    expect(new Cmp3300Component().add3300(1)).toBe(3301);
  });
});