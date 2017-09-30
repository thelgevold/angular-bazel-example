
import { Cmp3350Component } from './cmp';
describe('Cmp3350Component', () => {
  it('should add', () => {
    expect(new Cmp3350Component().add3350(1)).toBe(3351);
  });
});