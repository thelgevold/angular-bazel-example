
import { Cmp3612Component } from './cmp';
describe('Cmp3612Component', () => {
  it('should add', () => {
    expect(new Cmp3612Component().add3612(1)).toBe(3613);
  });
});