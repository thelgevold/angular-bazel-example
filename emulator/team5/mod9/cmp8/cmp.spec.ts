
import { Cmp4598Component } from './cmp';
describe('Cmp4598Component', () => {
  it('should add', () => {
    expect(new Cmp4598Component().add4598(1)).toBe(4599);
  });
});