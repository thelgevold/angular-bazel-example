
import { Cmp3025Component } from './cmp';
describe('Cmp3025Component', () => {
  it('should add', () => {
    expect(new Cmp3025Component().add3025(1)).toBe(3026);
  });
});