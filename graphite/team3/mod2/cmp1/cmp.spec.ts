
import { Cmp6321Component } from './cmp';
describe('Cmp6321Component', () => {
  it('should add', () => {
    expect(new Cmp6321Component().add6321(1)).toBe(6322);
  });
});