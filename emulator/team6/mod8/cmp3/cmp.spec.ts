
import { Cmp4683Component } from './cmp';
describe('Cmp4683Component', () => {
  it('should add', () => {
    expect(new Cmp4683Component().add4683(1)).toBe(4684);
  });
});