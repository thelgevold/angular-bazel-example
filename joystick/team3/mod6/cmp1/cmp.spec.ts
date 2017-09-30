
import { Cmp9361Component } from './cmp';
describe('Cmp9361Component', () => {
  it('should add', () => {
    expect(new Cmp9361Component().add9361(1)).toBe(9362);
  });
});