
import { Cmp3024Component } from './cmp';
describe('Cmp3024Component', () => {
  it('should add', () => {
    expect(new Cmp3024Component().add3024(1)).toBe(3025);
  });
});