
import { Cmp6794Component } from './cmp';
describe('Cmp6794Component', () => {
  it('should add', () => {
    expect(new Cmp6794Component().add6794(1)).toBe(6795);
  });
});