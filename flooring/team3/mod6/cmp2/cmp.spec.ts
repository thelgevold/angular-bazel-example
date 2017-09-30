
import { Cmp5362Component } from './cmp';
describe('Cmp5362Component', () => {
  it('should add', () => {
    expect(new Cmp5362Component().add5362(1)).toBe(5363);
  });
});