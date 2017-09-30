
import { Cmp3645Component } from './cmp';
describe('Cmp3645Component', () => {
  it('should add', () => {
    expect(new Cmp3645Component().add3645(1)).toBe(3646);
  });
});