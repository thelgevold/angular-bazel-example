
import { Cmp5079Component } from './cmp';
describe('Cmp5079Component', () => {
  it('should add', () => {
    expect(new Cmp5079Component().add5079(1)).toBe(5080);
  });
});