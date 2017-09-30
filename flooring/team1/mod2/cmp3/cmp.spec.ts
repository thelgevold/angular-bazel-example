
import { Cmp5123Component } from './cmp';
describe('Cmp5123Component', () => {
  it('should add', () => {
    expect(new Cmp5123Component().add5123(1)).toBe(5124);
  });
});