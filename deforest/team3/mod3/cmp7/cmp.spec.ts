
import { Cmp3337Component } from './cmp';
describe('Cmp3337Component', () => {
  it('should add', () => {
    expect(new Cmp3337Component().add3337(1)).toBe(3338);
  });
});