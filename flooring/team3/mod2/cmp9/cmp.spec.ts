
import { Cmp5329Component } from './cmp';
describe('Cmp5329Component', () => {
  it('should add', () => {
    expect(new Cmp5329Component().add5329(1)).toBe(5330);
  });
});