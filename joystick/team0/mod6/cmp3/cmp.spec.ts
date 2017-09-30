
import { Cmp9063Component } from './cmp';
describe('Cmp9063Component', () => {
  it('should add', () => {
    expect(new Cmp9063Component().add9063(1)).toBe(9064);
  });
});