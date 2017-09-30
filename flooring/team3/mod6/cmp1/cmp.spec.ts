
import { Cmp5361Component } from './cmp';
describe('Cmp5361Component', () => {
  it('should add', () => {
    expect(new Cmp5361Component().add5361(1)).toBe(5362);
  });
});