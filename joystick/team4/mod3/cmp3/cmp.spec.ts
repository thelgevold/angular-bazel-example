
import { Cmp9433Component } from './cmp';
describe('Cmp9433Component', () => {
  it('should add', () => {
    expect(new Cmp9433Component().add9433(1)).toBe(9434);
  });
});