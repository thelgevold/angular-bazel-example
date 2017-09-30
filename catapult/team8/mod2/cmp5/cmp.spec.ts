
import { Cmp2825Component } from './cmp';
describe('Cmp2825Component', () => {
  it('should add', () => {
    expect(new Cmp2825Component().add2825(1)).toBe(2826);
  });
});