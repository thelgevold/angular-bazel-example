
import { Cmp9001Component } from './cmp';
describe('Cmp9001Component', () => {
  it('should add', () => {
    expect(new Cmp9001Component().add9001(1)).toBe(9002);
  });
});