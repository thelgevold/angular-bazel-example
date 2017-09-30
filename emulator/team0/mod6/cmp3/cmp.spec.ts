
import { Cmp4063Component } from './cmp';
describe('Cmp4063Component', () => {
  it('should add', () => {
    expect(new Cmp4063Component().add4063(1)).toBe(4064);
  });
});