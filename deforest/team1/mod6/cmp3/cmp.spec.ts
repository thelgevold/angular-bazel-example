
import { Cmp3163Component } from './cmp';
describe('Cmp3163Component', () => {
  it('should add', () => {
    expect(new Cmp3163Component().add3163(1)).toBe(3164);
  });
});