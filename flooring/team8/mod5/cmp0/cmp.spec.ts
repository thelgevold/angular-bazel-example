
import { Cmp5850Component } from './cmp';
describe('Cmp5850Component', () => {
  it('should add', () => {
    expect(new Cmp5850Component().add5850(1)).toBe(5851);
  });
});