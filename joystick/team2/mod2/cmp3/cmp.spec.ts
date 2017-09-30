
import { Cmp9223Component } from './cmp';
describe('Cmp9223Component', () => {
  it('should add', () => {
    expect(new Cmp9223Component().add9223(1)).toBe(9224);
  });
});