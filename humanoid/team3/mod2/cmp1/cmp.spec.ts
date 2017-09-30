
import { Cmp7321Component } from './cmp';
describe('Cmp7321Component', () => {
  it('should add', () => {
    expect(new Cmp7321Component().add7321(1)).toBe(7322);
  });
});