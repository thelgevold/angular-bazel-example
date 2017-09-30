
import { Cmp3164Component } from './cmp';
describe('Cmp3164Component', () => {
  it('should add', () => {
    expect(new Cmp3164Component().add3164(1)).toBe(3165);
  });
});