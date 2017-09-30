
import { Cmp7164Component } from './cmp';
describe('Cmp7164Component', () => {
  it('should add', () => {
    expect(new Cmp7164Component().add7164(1)).toBe(7165);
  });
});