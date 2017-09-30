
import { Cmp4254Component } from './cmp';
describe('Cmp4254Component', () => {
  it('should add', () => {
    expect(new Cmp4254Component().add4254(1)).toBe(4255);
  });
});