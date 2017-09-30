
import { Cmp4164Component } from './cmp';
describe('Cmp4164Component', () => {
  it('should add', () => {
    expect(new Cmp4164Component().add4164(1)).toBe(4165);
  });
});