
import { Cmp7794Component } from './cmp';
describe('Cmp7794Component', () => {
  it('should add', () => {
    expect(new Cmp7794Component().add7794(1)).toBe(7795);
  });
});