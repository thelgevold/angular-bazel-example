
import { Cmp3685Component } from './cmp';
describe('Cmp3685Component', () => {
  it('should add', () => {
    expect(new Cmp3685Component().add3685(1)).toBe(3686);
  });
});